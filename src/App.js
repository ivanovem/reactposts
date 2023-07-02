import './styles/App.css';
import { useMemo, useState } from 'react';
import PostList from './components/PostList';

import PostForm from './components/UI/PostForm';
import PostFilter from './components/PostFilter';


function App() {
  const [posts, setPosts] = useState([
    {id:1, title: 'bb', body: 'bb'},
    {id:2, title: 'aa', body: 'cc'},
    {id:3, title: 'cc', body: 'aa'}
  ])

  const [filter, setFilter] = useState({sort:'', query:''})

  // const [selectedSort, setSelectedSort] = useState('');
  // const [searchQuery, setSearchQuery] = useState('');

  const sortedPosts = useMemo(()=>{
    console.log('Отработала функция SortedPosts')
    if (filter.sort) {
      return [...posts].sort((a,b)=>
      a[filter.sort].localeCompare(b[filter.sort]));
    }
    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo( ()=>{
      return sortedPosts.filter(post=> post.title.toLowerCase().includes(filter.query))
    }, [filter.query, sortedPosts]
  )

  const createPost= (newPost)=>{
    setPosts([...posts, newPost]);
  }
  
  const removePost = (post)=>{
    setPosts(posts.filter(p=> p.id!==post.id))
  }

  // const sortPosts = (sort)=>{
  //   setSelectedSort(sort);
  // }

  return (
    <div className="App">
      <PostForm create={createPost}/>
      <hr style={{margin: "15px 0px"}}/>
      <PostFilter filter={filter} setFilter={setFilter}/>
      {sortedAndSearchedPosts.length!==0
        ? <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Список постов 1"/>
        : <h1 style={{textAlign:"center"}}>
            Посты не найдены
          </h1>
        
      } 
    </div>
  );
}

export default App;
