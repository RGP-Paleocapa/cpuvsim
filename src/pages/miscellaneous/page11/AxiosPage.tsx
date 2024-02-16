// src/components/MyComponent.tsx
import { fetchPosts } from '@/services/jsonPlacehorderService';
import { Post } from '@/types';
import React, { useState, useEffect } from 'react';

const AxiosPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const getPosts = async () => {
      const data = await fetchPosts();
      setPosts(data);
    };

    getPosts();
  }, []);

  return (
    <div className="flex flex-col items-center">
      {posts.map(post => (
        <div key={post.id} className="max-w-xl w-full m-4 p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-blue-600 mb-2">{post.title}</h3>
          <p className="text-gray-700 text-sm">{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default AxiosPage;
