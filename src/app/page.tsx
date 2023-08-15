'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Display from '../components/Display/Display';
import Button from '../components/Button/Button';
import PostCard from '@/components/PostCard/PostCard';

interface Post {
  id: number;
  title: string;
  body: string;
}

function Home() {
  const [count, setCount] = useState(0);
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get<Post[]>(
        'https://my-json-server.typicode.com/typicode/demo/posts'
      );
      setPosts(response.data);
    }
    fetchPosts();
  }, []);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div>
      <h1>Counter App</h1>
      <Display count={count} />
      <Button label='Increment' onClick={increment} />
      <Button label='Decrement' onClick={decrement} />
      <Button label='Reset' onClick={reset} />

      <div>POST TEST</div>

      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

export default Home;
