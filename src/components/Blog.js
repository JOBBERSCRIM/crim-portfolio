import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import matter from "gray-matter";
import AOS from "aos";
import "aos/dist/aos.css";

function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 800 });

    const loadPosts = async () => {
      const filenames = [
        "2025-07-01-first-post.md",
        "2025-06-29-second-post.md"
        // Add more filenames here
      ];
      const loaded = [];

      for (const name of filenames) {
        try {
          const res = await fetch(`${process.env.PUBLIC_URL}/${name}`);
          const text = await res.text();

          if (text.startsWith("<!DOCTYPE html>")) {
            console.warn(`${name} is not a valid markdown file.`);
            continue;
          }

          const { data, content } = matter(text);
          loaded.push({
            ...data,
            content,
            slug: name.replace(".md", "")
          });
        } catch (err) {
          console.error(`Failed to load ${name}:`, err);
        }
      }

      setPosts(loaded.sort((a, b) => new Date(b.date) - new Date(a.date)));
    };

    loadPosts();
  }, []);

  return (
    <section className="py-16 px-6 bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen">
      <h1 className="text-4xl font-extrabold text-center mb-12">Today with CRIM</h1>
      <div className="grid gap-8 max-w-5xl mx-auto">
        {posts.map((post) => (
          <Link
            to={`/today/${post.slug}`}
            key={post.slug}
            data-aos="fade-up"
            className="block p-6 rounded-lg shadow-md bg-gray-100 dark:bg-gray-800 hover:shadow-xl transition"
          >
            <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
            <p className="text-sm text-gray-500 mb-2">
              {new Date(post.date).toDateString()}
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              {post.content.slice(0, 200)}...
            </p>
            <div className="flex flex-wrap gap-2">
              {post.tags?.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-200 px-2 py-1 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Blog;