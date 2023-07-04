import './styles/App.css';
import { useEffect, useState } from 'react';
import PostList from './components/PostList';

import PostForm from './components/UI/PostForm';
import PostFilter from './components/PostFilter';
import MyModal from './components/UI/MyModal/MyModal';
import MyButton from './components/UI/button/MyButton';
import { usePosts } from './components/hooks/usePosts';
import PostService from './components/API/PostService';


function App() {
  const [posts, setPosts] = useState([
    {id:1, title: 'bb', body: 'bb'},
    {id:2, title: 'aa', body: 'cc'},
    {id:3, title: 'cc', body: 'aa'}
  ])

  const [filter, setFilter] = useState({sort:'', query:''})
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
   
  useEffect(()=>  {
    fetchPosts()
  }, [])

  const createPost= (newPost)=>{
    setPosts([...posts, newPost]);
    setModal(false);
  }
  
  const removePost = (post)=>{
    setPosts(posts.filter(p=> p.id!==post.id))
  }

  async function fetchPosts() {
    const posts = await PostService.getAll();
    setPosts(posts);
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
