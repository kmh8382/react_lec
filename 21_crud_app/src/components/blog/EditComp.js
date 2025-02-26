import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EditComp = ({ id }) => {

  // blog 객체 선언
  const [blog, setBlog] = useState({
    id: 0,
    title: '',
    content: '',
    createDt: '',
  });

  // 최초 렌더링 and id가 변하면 서버에 상세 정보를 요청
  useEffect(() => {
//=- 외부 함수로 옴김    
    const getBlog = async () => {
      const response = await axios.get(`http://localhost:8080/blogs/${id}`);
      const jsondata = await response.data;
      // console.log(jsondata);
      setBlog(jsondata.results.blog);
    }
    getBlog();
  }, [id])

  // onChangeHandler()
  const onChangeHandler = e => {
    setBlog({
      ...blog,
      [e.target.name]: e.target.value,
    })
  }

  // <div> 태그를 만드는 함수
  const div = (label, value) => {
    return (
      <div style={{display: 'flex'}}>
        <div style={{width: '100px', color: 'blue'}}>{label}</div>
        <div style={{width: '500px'}}>{value}</div>
      </div>
    )  
  }

  // 페이지 이동하는 useNavigate()
  const navigate = useNavigate();

  // onClickModifyHandler()
  const onClickModifyHandler = async () => {
// 외부 함수로 옴김    
    const response = await axios.put(`http://localhost:8080/blogs/${id}`, blog);
    const jsonData = response.data;
    // console.log(jsonData);
    window.alert(jsonData.message);
//=- 외부 함수로 옴김    
    navigate({
      pathname: `/blog/detail/${id}`,
    });
  }

  // onClickDeleteHandler()
  const onClickDeleteHandler = async () => {
    if(!window.confirm('블로그를 삭제할까요?'))
      return;
// 외부 함수로 옴김    
    const response = await axios.delete(`http://localhost:8080/blogs/${id}`, blog);
    const jsonData = response.data;
    window.alert(jsonData.message);
//=- 외부 함수로 옴김    
    navigate({
      pathname: `/blog/list`,
    });

  }

  return (
    <div>
      { div('ID', blog.id) }
      { div('CREATE_DT', blog.createDt) }
      { div('TITLE', <input type="text" name="title" value={blog.title} onChange={onChangeHandler}/>) }
      { div('CONTENT', <input type="text" name="content" value={blog.content} onChange={onChangeHandler}/>) }
      <div>
        <button onClick={onClickModifyHandler}>수정하기</button>
        <button onClick={onClickDeleteHandler}>삭제하기</button>
      </div>
    </div>
  );
};

export default EditComp;