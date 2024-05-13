import Directoy from '../../components/directory/directory.component';
import {Outlet} from 'react-router-dom';
import {Component} from 'react';
class Home extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
    };
  }
  componentDidMount() {
    fetch('')
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return {monsters: users};
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }

  render() {
    const categories = [
      {
        id: 1,
        title: 'hats',
        imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
      },
      {
        id: 2,
        title: 'jackets',
        imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
      },
      {
        id: 3,
        title: 'sneakers',
        imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
      },
      {
        id: 4,
        title: 'womens',
        imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
      },
      {
        id: 5,
        title: 'mens',
        imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
      },
    ];

    return (
      <div>
        <p>
          My name is{' '}
          {this.state.monsters.map((mons) => {
            return <h1>{mons.name}</h1>;
          })}
        </p>
        <button
          onClick={() => {
            this.setState({name: {fname: 'Lal', lname: 'Mia'}});
            console.log(this.state);
          }}
          className='btn btn-primary'
        >
          Change Name
        </button>
        <Outlet />
        <Directoy categories={categories} />
      </div>
    );
  }
}

export default Home;
