rs.initiate(
  {
    _id: "rs0",
    members: [
      { _id: 0, host: "mongo-h1:27017" },
      { _id: 1, host: "mongo-h2:27017" },
      { _id: 2, host: "mongo-h3:27017" },
    ]
  }
);

rs.config();
