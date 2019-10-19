import React from "react";
import styles from "./Events.module.scss";
import { Link } from 'react-router-dom';

export const ListLayout = ({ children }) => {
  return <div className={styles.listLayout}>{children}</div>;
};

export const ListHeader = ({ children, title }) => {
  return (
    <div class={styles.listTitle}>
      <h1>{title}</h1>
      {children}
    </div>
  );
};

export const SearchEvents = props => {
  return (
    <div className={styles.searchEvents}>
      <input
        className={styles.tableImput}
        type="text"
        placeholder="Search"
        aria-label="Search"
        placeholder="Find your party"
      ></input>
      <button type="button" class="btn btn-dark">
        Find
      </button>
    </div>
  );
};

export const List = ({ data }) => {
  return (
    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th className={styles.tableLables} scope="col">Title</th>
            <th className={styles.tableLables} scope="col">Members</th>
            <th className={styles.tableLables} scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map(el => {
            return (
              <tr>
                <td className={styles.tableLables}><Link to='/event/1'>{el.title}</Link></td>
                <td className={styles.tableLables}>{el.count}</td>
                <td className={styles.tableLables}>
                  <button type="button" class="btn btn-dark">
                    {el.isInvited ? "Leave" : "Join"}
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export const Pagination = props => {
  return (
    <div className={styles.paginationContainer}>
      <ul class="pagination">
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
            <span class="sr-only">Previous</span>
          </a>
        </li>
        <li class="page-item active">
          <a class="page-link" href="#">
            1
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">
            2
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">
            3
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
            <span class="sr-only">Next</span>
          </a>
        </li>
      </ul>
    </div>
  );
};
