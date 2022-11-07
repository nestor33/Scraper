export interface Props {
  postsPerPage: number;
  totalPosts: number;
  paginate: any;
}

function Pagination(props: Props) {
  const pageNumbers: number[] = [];

  for (let i = 1; i <= Math.ceil(props.totalPosts / props.postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul>
        Pages :
        {pageNumbers.map((num) => {
          return (
            <li key={num} style={{ display: 'inline-block' }}>
              <a
                onClick={() => {
                  props.paginate(num);
                }}
                href='!#'
              >
                {num}...
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Pagination;
