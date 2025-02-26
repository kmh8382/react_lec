import React from 'react';
import { useNavigate } from 'react-router-dom';

const BlogCustomNavigate1 = () => {

  const navigate = useNavigate();

  
  const goToDetailPage = (id) => {
    navigate({
      pathname: `/blog/detail/${id}`,
    })
  }

  return { goToDetailPage }
}; 

export default BlogCustomNavigate1;