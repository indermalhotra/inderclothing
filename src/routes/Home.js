import Directory from "../components/directory/Directory";

function Home() {
    const category = [
        {
          id: 1,
          title: "Hats",
          imgURL:"https://m.media-amazon.com/images/I/81T-W+2GShL._SY550_.jpg"
        },
        {
          id: 2,
          title: "Jackets",
          imgURL:"https://assets.ajio.com/medias/sys_master/root/20231111/FCOy/654f9cb4ddf77915197fd3cb/-473Wx593H-410408513-27e-MODEL.jpg"
        },
        {
          id: 3,
          title: "Sneakers",
          imgURL:"https://images-cdn.ubuy.co.in/6544cd6cbd6f80076961cb0e-xidiso-mens-fashion-sneakers-sports-shoe.jpg"
        },
        {
          id: 4,
          title: "Womens",
          imgURL:"https://m.media-amazon.com/images/I/71td+0ThS4L._AC_UY1100_.jpg"
        },
        {
          id: 5,
          title: "Mens",
          imgURL:"https://i0.wp.com/www.mrkoachman.com/wp-content/uploads/2018/10/dress-codes-men.jpg?resize=500%2C400&ssl=1"
        },
      ];
      return (
        <Directory category = {category}/>
      );
}

export default Home
