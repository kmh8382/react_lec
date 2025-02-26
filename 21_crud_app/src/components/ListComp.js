import { useEffect, useState } from 'react';
// import axios from 'axios';
import { useSearchParams, useNavigate } from 'react-router-dom';

import { getBlogList } from '../api/blogAPI';
import BlogCustomNavigate1 from '../hooks/BlogCustomNavigate1';

const ListComp = () => {

  const[ serverData, setServerData ] = useState({
    status: 0,
    message: '',
    results: {
      blogList: [],
    },
  });

  const[ queryParams ] = useSearchParams();
  const page = !queryParams.get('page') ? 1 : parseInt(queryParams.get('page'));
  const size = !queryParams.get('size') ? 5 : parseInt(queryParams.get('size'));
  const sort = !queryParams.get('sort') ? 'id,desc' : queryParams.get('sort');

  useEffect(() => {
//=- 외부 함수로 옴김
    // const getBlogList = async () => {
    //   const response = await axios({
    //     url: 'http://localhost:8080/blogs',
    //     method: 'get',
    //     params: {
    //       page: page,
    //       size: size,
    //       sort: sort,
    //     },
    //   });
    //   const jsondata = await response.data;
    //   // console.log(jsondata);  
    //   setServerData(jsondata);
    //   // test();   //-= 커스텀 함수 사용
    // }
    // getBlogList();
    getBlogList({ page, size, sort })
      .then(jsondata => {
        console.log(jsondata);
        setServerData(jsondata);
      })
  }, [page, size, sort]);   // page, size, sort가 변경되면 리렌더링합니다.

//=- 외부 함수로 옴김  
  // // 페이지 이동하는 useNavigate()
  // const navigate = useNavigate();

  // // 상세 페이지로 이동하는 fnDetailPage()
  // const fnDetailPage = (id) => {
    
  //   navigate({
  //     pathname: `/blog/detail/${id}`,   // 상세 페이지 이동하는 링크
  //   })
  // }
  const { goToDetailPage } = BlogCustomNavigate1();

  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            <td>제목</td>
            <td>작성일시</td>
          </tr>
        </thead>
        <tbody>
          {
            serverData.results.blogList.map(blog => 
              <tr key={blog.id}>
                <td>
                  {/*<span onClick={() => { fnDetailPage(blog.id) }}>{blog.title}</span>*/}
                  <span onClick={() => { goToDetailPage(blog.id) }}>{blog.title}</span>
                </td>
                <td>{blog.createDt.replace('T', ' ')}</td>
              </tr>
            )
          }
        </tbody>

      </table>
    </div>
  );
};

export default ListComp;