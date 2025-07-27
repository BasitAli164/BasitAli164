"use client";
import React, { useEffect, useState } from "react";

export default function page() {
  const [comment, setComment] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchComments = async () => {
      setLoading(true);

      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/comment?_limit=10");
        const data = await response.json();
        setComment(data);
        console.log(data);
      } catch (error) {
        console.log("Error is comment page:", error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchComments();
  }, []);

  if (loading) return <h1 className="text-9xl text-white">Loading....</h1>;
  if(!comment) return <h2>There is no data fetch</h2>
  return (
    <div>
      {comment.map((item) => (
        <div key={item.id}>
          <h1>{item.email}</h1>
        </div>
      ))}
    </div>
  );
}
