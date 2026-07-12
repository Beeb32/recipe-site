import Link from "next/link";
import { addComment } from "@/app/actions/reviews";
import type { CommentWithAuthor } from "@/lib/reviews";

export function CommentSection({
  recipeId,
  recipeSlug,
  comments,
  canComment,
}: {
  recipeId: string;
  recipeSlug: string;
  comments: CommentWithAuthor[];
  canComment: boolean;
}) {
  const action = addComment.bind(null, recipeId, recipeSlug);

  return (
    <section className="mt-10">
      <h2 className="font-semibold mb-3">Comments ({comments.length})</h2>

      {canComment ? (
        <form action={action} className="flex flex-col gap-2 mb-6">
          <textarea
            name="body"
            required
            maxLength={2000}
            rows={3}
            placeholder="Share a tip or a tweak..."
            className="w-full rounded-md border border-black/10 dark:border-white/15 bg-transparent px-3 py-2 text-sm outline-none focus:border-black/30 dark:focus:border-white/30"
          />
          <button
            type="submit"
            className="self-start rounded-md bg-foreground text-background px-4 py-2 text-sm font-medium"
          >
            Post comment
          </button>
        </form>
      ) : (
        <Link href="/login" className="text-xs underline underline-offset-2 opacity-70 block mb-6">
          Log in to comment
        </Link>
      )}

      {comments.length === 0 ? (
        <p className="text-sm opacity-70">No comments yet.</p>
      ) : (
        <ul className="space-y-4">
          {comments.map((c) => (
            <li key={c.id} className="border-b border-black/10 dark:border-white/15 pb-4">
              <div className="flex items-center gap-2 text-xs opacity-60 mb-1">
                <span className="font-medium">{c.authorName}</span>
                <span>{new Date(c.createdAt).toLocaleDateString()}</span>
              </div>
              <p className="text-sm whitespace-pre-wrap">{c.body}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
