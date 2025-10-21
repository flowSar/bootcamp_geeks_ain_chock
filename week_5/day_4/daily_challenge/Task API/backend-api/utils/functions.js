import fs from "fs";

export function isExist(filePath, user, fn) {
  readFromFile(filePath, (users, err) => {
    if (err) {
      return fn(false, err);
    }

    for (const element of users) {
      if (element.email === user.email) {
        return fn(
          { ...element, password: "hidden" },
          "This email already exists"
        );
      }

      if (element.username === user.username) {
        return fn(
          { ...element, password: "hidden" },
          "This username already exists"
        );
      }
    }
    // If we reached here, both are unique
    fn(false, false);
  });
}

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
          return mergeClean(task, newTask);
          // return { ...task, ...newTask };
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

function mergeClean(target, source) {
  const newData = { ...target };
  for (const [key, value] of Object.entries(source)) {
    if (value != null && value !== "" && value !== undefined) {
      newData[key] = value;
    }
  }
  return newData;
}
