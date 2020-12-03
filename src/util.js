import { v4 as uuidv4 } from "uuid";

function chillHop() {
  return [
    {
      name: "Beaver Creek",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/10/efaa848553d09b4d9fc0752844456e41b34de276-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=8518",
      artist: ["Philantrope, Fujitsu"],
      color: "#EF8EA9, #ab417f",
      id: uuidv4(),
      active: true,
    },
    {
      name: "Frozen Firs",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/10/0e5bb63f838ff92eeac142aae944e9f678df13c9-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10310",
      artist: "Sworn",
      color: "#CD607D, #c94043",
      id: uuidv4(),
      active: false,
    },
  ];
}

export default chillHop;
