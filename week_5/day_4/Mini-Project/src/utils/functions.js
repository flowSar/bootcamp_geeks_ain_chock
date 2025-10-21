import fs from "fs";

export function readFromFile(filePath, fn) {
  try {
    fs.readFile(filePath, "utf-8", (err, data) => {
      if (err) {
        fn([], err);
      }
      fn(JSON.parse(data));
    });
  } catch (error) {
    fn([], error);
  }
}

export function writeToFile(filePath, task, fn) {
  try {
    readFromFile(filePath, (data, err) => {
      if (err) {
        fn([], err);
      }
      task.id = data.length + 1;
      data.push(task);
      fs.writeFile(filePath, JSON.stringify(data, null, 2), "utf8", (err) => {
        if (err) {
          fn([], err);
        }
        fn(task);
      });
    });
  } catch (error) {
    fn([], error);
  }
}

export function updateToFile(filePath, newTask, fn) {
  try {
    readFromFile(filePath, (data, err) => {
      if (err) {
        fn([], err);
      }

      const newData = data.map((task) => {
        if (task.id == newTask.id) {
          return { ...task, ...newTask };
        }
        return task;
      });

      fs.writeFile(
        filePath,
        JSON.stringify(newData, null, 2),
        "utf8",
        (err) => {
          if (err) {
            fn([], err);
          }
          fn(newData);
        }
      );
    });
  } catch (error) {
    fn([], error);
  }
}

export function deleteFromFile(filePath, id, fn) {
  try {
    readFromFile(filePath, (data, err) => {
      if (err) {
        fn([], err);
      }
      const newData = data.filter((task) => task.id != id);
      fs.writeFile(
        filePath,
        JSON.stringify(newData, null, 2),
        "utf8",
        (err) => {
          if (err) {
            fn([], err);
          }
          fn(data[id]);
        }
      );
    });
  } catch (error) {
    fn([], error);
  }
}
