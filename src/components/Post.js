import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import matter from "gray-matter";

function Post() {
  const { slug } = useParams();
  const [content, setContent] = useState("");
  const [meta, setMeta] = useState({});
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/${slug}.md`)
    
      .then((res) => {
        if (!res.ok) throw new Error("Post not found");
        return res.text();
      })
      .then((text) => {
        console.log("Fetched content:", text);
        if (text.startsWith("<!DOCTYPE html>")) {
          throw new Error("Invalid markdown file");
        }

        const { data, content } = matter(text);
        setMeta(data);
        setContent(content);
        setLoading(false);
      })
      .catch(() => {
        setNotFound(true);
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return (
      <section className="py-16 px-6 text-center text-gray-500 dark:text-gray-400">
        Loading post...
      </section>
    );
  }

  if (notFound) {
    return (
      <section className="py-16 px-6 text-center text-red-500 dark:text-red-400">
        ❌ Post not found.
      </section>
    );
  }

  return (
    <section className="py-16 px-6 bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen max-w-3xl mx-auto">
      <Link
        to="/today"
        className="inline-block mb-6 text-green-500 hover:underline text-sm"
      >
        ← Back to Blog
      </Link>

      <h1 className="text-3xl font-bold mb-2">{meta.title}</h1>
      <p className="text-sm text-gray-500 mb-4">
        {new Date(meta.date).toDateString()}
      </p>

      {meta.tags && (
        <div className="flex flex-wrap gap-2 mb-6">
          {meta.tags.map((tag, i) => (
            <span
              key={i}
              className="text-xs bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-200 px-2 py-1 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}

      <ReactMarkdown
        components={{
          h1: ({ node, children, ...props }) =>
            children?.length ? <h1 className="text-2xl font-bold mb-4" {...props}>{children}</h1> : null,
          h2: ({ node, children, ...props }) =>
            children?.length ? <h2 className="text-xl font-semibold mb-3" {...props}>{children}</h2> : null,
          p: ({ node, children, ...props }) =>
            children?.length ? <p className="mb-4 leading-relaxed" {...props}>{children}</p> : null,
          ul: ({ node, children, ...props }) =>
            children?.length ? <ul className="list-disc list-inside mb-4" {...props}>{children}</ul> : null,
          li: ({ node, children, ...props }) =>
            children?.length ? <li className="ml-4 mb-2" {...props}>{children}</li> : null,
          code: ({ node, children, ...props }) =>
            children?.length ? <code className="bg-gray-200 dark:bg-gray-800 px-1 rounded" {...props}>{children}</code> : null,
          pre: ({ node, children, ...props }) =>
            children?.length ? <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded mb-4 overflow-x-auto" {...props}>{children}</pre> : null,
          a: ({ node, children, ...props }) =>
            children?.length ? <a className="text-green-600 hover:underline" {...props}>{children}</a> : null,
        }}
      >
        {content}
      </ReactMarkdown>
    </section>
  );
}

export default Post;