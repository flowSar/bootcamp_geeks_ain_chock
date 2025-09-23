class Video {
  constructor(title, uploader, time) {
    this.title = title;
    this.uploader = uploader;
    this.time = time;
  }

  watch() {
    console.log(`${this.uploader} watched all ${this.time} of ${this.title}!`);
  }
}

const video1 = new Video("Learn JavaScript Basics", "Brahim", 300);
video1.watch();

const video2 = new Video("Advanced Node.js Tutorial", "Sarah", 600);
video2.watch();

const data = [
  { title: "React Crash Course", uploader: "Ali", time: 1200 },
  { title: "CSS Flexbox Guide", uploader: "Nora", time: 450 },
  { title: "Python for Beginners", uploader: "Omar", time: 900 },
  { title: "Linux Commands Tutorial", uploader: "Lina", time: 700 },
  { title: "Docker in 10 Minutes", uploader: "Youssef", time: 800 },
];

for (const obj of data) {
  const v = new Video(obj.title, obj.uploader, obj.time);
  v.watch();
}
