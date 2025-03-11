import React, { useState } from 'react'
import {Pagination,  Modal} from 'antd';
const test = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () =>
{
    setIsModalOpen(false);
}
const handleCancel = () =>
    {
        setIsModalOpen(false);
    }
return (
    <div>
      <Modal 
      title= "Basic Modal"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      >
    <p> Some contents... </p>
    <p> Some contents... </p>
    <p> Some contents... </p>
      </Modal>
      <button onClick={() => showModal()}> open</button>

      <Pagination
        current={currentPage}
        total={100}
        onChange={(page) => setCurrentPage(page)}
        defaultCurrent={1}
      />
    </div>
  )
}

export default test
