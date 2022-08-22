const pictures = ["plum-1.jpg", "plum-2.jpg", "plum-3.jpg", "plum-4.jpg"];

const getPictures = (number) => {
  let ret = [];

  for (let i = 0; i < number; i++) {
    ret.push({
      image: pictures[i % pictures.length],
    });
  }

  return ret;
};

export default getPictures;
