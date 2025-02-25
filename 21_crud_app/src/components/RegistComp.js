import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RegistComp = () => {

  const navigate = useNavigate();

  const initialBlog = {
    title: '',
    content: "",
  }
  const[ blog, setBlog ] = useState(initialBlog);

  const onChangeHandler = e => {
    setBlog({
      ...blog,
      [e.target.name]: e.target.value,
    })
  }

  const onClickHandler = async () => {
    const response = await axios({
      url: 'http://localhost:8080/blogs',
      method: 'post',
      data: blog,
    });
    const jsondata = await response.data;
    // console.log(jsondata);
    alert(jsondata.message);
    setBlog(initialBlog);
    navigate({
      pathname: "/blog/list",
    })

  }

  return (
    <div>
      <input type="text" name="title" value={blog.title} placeholder="제목" onChange={onChangeHandler}/>
      <br/>
      <input type="text" name="content" value={blog.content} placeholder="내용" onChange={onChangeHandler}/>
      <br/>
      <button onClick={onClickHandler}>등록하기</button>
    </div>
  );
};

export default RegistComp;