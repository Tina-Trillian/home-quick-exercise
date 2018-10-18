import React from 'react';

const List = ({page}) => {
    return (
        <div className="list">
            <div
            className={`list-item
            ${page > 1 ? "visited" : ""}
            ${page === 1 ? "active" : ""}`}>Name</div>
            <div className={`list-item
            ${page > 2 ? "visited" : ""}
            ${page === 2 ? "active" : ""}`}>Email</div>
            <div className={`list-item
            ${page > 3 ? "visited" : ""}
            ${page === 3 ? "active" : ""}`}>Phone</div>
            <div className={`list-item
            ${page > 4 ? "visited" : ""}
            ${page === 4 ? "active" : ""}`}>Salary</div>
            <div className={`list-item
            ${page > 5 ? "visited" : ""}
            ${page === 5 ? "active" : ""}`}>Summary</div>
        </div>
    );
};

export default List;