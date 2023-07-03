import './styles/App.css';
import { useMemo, useState } from 'react';
import PostList from './components/PostList';

import PostForm from './components/UI/PostForm';
import PostFilter from './components/PostFilter';
import MyModal from './components/UI/MyModal/MyModal';
import MyButton from './components/UI/button/MyButton';


function App() {
  const [posts, setPosts] = useState([
    {id:1, title: 'bb', body: 'bb'},
    {id:2, title: 'aa', body: 'cc'},
    {id:3, title: 'cc', body: 'aa'}
  ])

  const [filter, setFilter] = useState({sort:'', query:''})
  const [modal, setModal] = useState(false);

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
    setModal(false);
  }
  
  const removePost = (post)=>{
    setPosts(posts.filter(p=> p.id!==post.id))
  }

  return (
    <div className="App">
      <MyButton style={{marginTop: "30px"}} onClick={()=>setModal(true)}>
        Создать пользователя
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost}/>
      </MyModal>
      <hr style={{margin: "15px 0px"}}/>
      <PostFilter filter={filter} setFilter={setFilter}/>

      <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Список постов 1"/>
     
    </div>
  );
}

export default App;
