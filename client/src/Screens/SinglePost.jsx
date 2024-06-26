
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 

const SinglePost = ({ match }) => {
  const [posts, setPosts] = useState([]);
 // const postId = match.params.postId;
 const postId = 5;
 const [showModal, setShowModal] = useState(false);
 const [formData, setFormData] = useState({
   title: '',
   author: '',
   publicationDate: '',
   category: '',
//    tags: [],
   content: '',
   imageUrl: '',
   videoUrl: ''
 });
 useEffect(() => {
  const fetchPosts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/posts');
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  fetchPosts();
}, []);
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  const handleSubmit = async () => {

    try {
        const response = await axios.post('http://localhost:5000/api/posts', formData);
        console.log('Post created successfully:', response.data);
        handleCloseModal();
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };
  if (!posts) {
    return <div>Loading...</div>;
  }

  const { title, author, publicationDate, category, content, imageUrl, videoUrl } = posts;
//   const tagsString = tags ? tags.join(', ') : '';

  return (
    <div className="single-post">
      {/* <h2>{title}</h2>
      <p>Author: {author}</p>
      <p>Publication Date: {publicationDate}</p>
      <p>Category: {category}</p>
      {/* {tags && <p>Tags: {tagsString}</p>} */}
      {/* <p>Tags: {tags.join(', ')}</p> */}
      {/* <div dangerouslySetInnerHTML={{ __html: content }} />
      {imageUrl && <img src={imageUrl} alt="Post Image" />}
      {videoUrl && <video src={videoUrl} controls />} */} 
      <div className="post-list">
      <h2>Posts</h2>
      <ul>
        {posts.map(post => (
          <li key={post._id}>
            <Link to={`/posts/${post._id}`}>{post.title}</Link>
            <p>Author: {post.author}</p>
            <p>Publication Date: {post.publicationDate}</p>
            <p>Category: {post.category}</p>
            {/* Add more details as needed */}
          </li>
        ))}
      </ul>
    </div>
      <Button variant="primary" onClick={handleShowModal}>Add Post</Button>
      
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" name="title" value={formData.title} onChange={handleChange} />
            </Form.Group>

            <Form.Group controlId="author">
            <Form.Label>Author</Form.Label>
            <Form.Control type="text" name="author" value={formData.author} onChange={handleChange} />
            </Form.Group>

            <Form.Group controlId="publicationDate">
            <Form.Label>Publication Date</Form.Label>
            <Form.Control type="date" name="publicationDate" value={formData.publicationDate} onChange={handleChange} />
            </Form.Group>

            <Form.Group controlId="category">
            <Form.Label>Category</Form.Label>
            <Form.Control type="text" name="category" value={formData.category} onChange={handleChange} />
            </Form.Group>

            {/* <Form.Group controlId="tags">
            <Form.Label>Tags (comma-separated)</Form.Label>
            <Form.Control type="text" name="tags" value={formData.tags.join(',')} onChange={handleChange} />
            </Form.Group> */}

            <Form.Group controlId="content">
            <Form.Label>Content</Form.Label>
            <Form.Control as="textarea" rows={3} name="content" value={formData.content} onChange={handleChange} />
            </Form.Group>

            <Form.Group controlId="imageUrl">
            <Form.Label>Image URL</Form.Label>
            <Form.Control type="text" name="imageUrl" value={formData.imageUrl} onChange={handleChange} />
            </Form.Group>

            <Form.Group controlId="videoUrl">
            <Form.Label>Video URL</Form.Label>
            <Form.Control type="text" name="videoUrl" value={formData.videoUrl} onChange={handleChange} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
          <Button variant="primary" onClick={handleSubmit}>Save</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default SinglePost;
