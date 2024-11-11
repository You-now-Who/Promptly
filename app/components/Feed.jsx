"use client"
import React, {useState, useEffect} from 'react'
import PromptCard from './PromptCard'

const PromptCardList = ({data, handleTagClick}) => {
  return(
    <div className="mt-16 prompt_layout" key="div">
      {data.map((post) => (
        <>
        <PromptCard
          key={post.id}
          post={post}
          handleTagClick={handleTagClick}
        />
        </>
      ))}
    </div>
    // <>
    // </>
  )
}

const Feed = () => {
  const [searchText, setsearchText] = useState("");
  const [posts, setPosts] = useState([]);

  const handleSearchChange = (e) => {
    setsearchText(e.target.value)
  }

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('/api/prompt');
      const data = await response.json();
      // console.log("posts data", data);
      setPosts(data);
    }

    fetchPosts();
  }, [])
  return (
    <section className="feed">
      <form action="" className="relative w-full flex-center">
        <input type="text"
        placeholder='Search for a tag or a username'
        value={searchText}
        onChange={handleSearchChange}
        required
        className='search_input peer'/>
      </form>

      <PromptCardList data={posts} handleTagClick={() => {}} />
    </section>
  )
}

export default Feed