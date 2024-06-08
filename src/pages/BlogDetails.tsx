import { useBlogData } from "@/hooks/queryhooks/useBlogData";
import { useToggleLikeBlog } from "@/hooks/queryhooks/useToggleLikeBlog";

import { useParams } from "react-router-dom";
import { useErrorBoundary } from "react-error-boundary";

import { badgeVariants } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";

import { PiHeartFill, PiHeartLight } from "react-icons/pi";

import RecommendedBlogs from "@/components/RecommendedBlogs";
import { useEffect } from "react";
import scrollToTop from "@/utils/scrollToTop";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import BlogDetailSkeleton from "@/components/skeletonui/BlogDetailSkeleton";

const BlogDetails = () => {
  const savedUser = useSelector((state: RootState) => state.auth.user)!;
  const { id } = useParams();
  const { toast } = useToast();
  const { showBoundary } = useErrorBoundary();

  //Check if Id exists before using it.
  if (!id) {
    // Handle the case when id is undefined
    return <div>No product ID provided</div>;
  }

  const { data, isLoading, isError, error } = useBlogData({ blogId: id });

  const { mutate, isPending } = useToggleLikeBlog({
    blogId: id,
    userId: savedUser?.id,
  });

  const toggleLike = () => {
    if (!savedUser) {
      toast({
        description: "You have to log in to do that!",
        variant: "destructive",
      });
      return;
    }

    mutate(data, {
      onError: (error) => {
        toast({
          description: error.message,
          variant: "destructive",
        });
      },
    });
  };

  useEffect(() => {
    scrollToTop();
  }, [id]);

  useEffect(() => {
    if (isError) {
      showBoundary(error);
    }
  }, [isError, error, showBoundary]);

  if (isLoading) return <BlogDetailSkeleton />;

  const parsedText = data && data.body && data.body.replace(/\\n/g, "<br>");

  const isLiked = data.likes.findIndex((id: string) => id === savedUser?.id);

  return (
    <div className='flex flex-col gap-3 w-full max-w-3xl mx-auto'>
      <h1 className='text-center text-3xl sm:text-4xl lg:text-5xl font-semibold md:my-2'>
        {data.title}
      </h1>
      <div>
        <figure>
          <img
            src={data.images[0].url}
            alt={data.title}
            className='w-full aspect-video object-cover'
          />
        </figure>
        <div className='text-sm flex items-center justify-between text-neutral-500 mt-1'>
          <p>By Admin</p>
          <p>{data.views} views</p>
        </div>
      </div>

      <div className='space-x-2'>
        <p
          className={`${badgeVariants({
            variant: "secondary",
          })} bg-neutral-200`}>
          {data.category.title}
        </p>
      </div>

      <article
        className='mt-2'
        dangerouslySetInnerHTML={{ __html: parsedText }}></article>

      <div className='border-t pt-3 text-neutral-500 flex gap-3 items-center'>
        <div className='flex items-center gap-1'>
          <button
            onClick={toggleLike}
            disabled={isPending}
            aria-disabled={isPending}>
            {isLiked === -1 ? (
              <>
                <PiHeartLight fontSize={25} aria-hidden={true} />
                <span className='sr-only'>Like article</span>
              </>
            ) : (
              <>
                <PiHeartFill
                  fontSize={25}
                  aria-hidden={true}
                  className='text-red-600'
                />
                <span className='sr-only'>Unlike article</span>
              </>
            )}
          </button>
          <p className='text-sm'>{data.likes.length}</p>
        </div>
      </div>
      <div>
        <h3 className='text-xl sm:text-2xl lg:text-3xl font-semibold my-3'>
          You may also like
        </h3>
        <RecommendedBlogs category={data.category._id} />
      </div>
    </div>
  );
};

export default BlogDetails;
