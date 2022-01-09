import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

const firstBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/91vnzZO5yPL._AC_UL200_SR200,200_.jpg',
  title: 'The Very Hungry Caterpillar',
  author: 'Eric Carle',
}

const secondBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL200_SR200,200_.jpg',
  title: 'I Love You to the Moon and Back',
  author: 'Amelia Hepworth',
}

function BookList() {
  return(
    <section className='booklist'>
      <Book 
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book 
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
};

const Book = (props) => {
  return (
    <article className='book'>
      <img src={props.img} alt='' />
      <h1>{props.title}</h1>
      <h4>{props.author.toUpperCase()}</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById('root'));