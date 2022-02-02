const AWS = require("aws-sdk");

const getTask = async (event) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient();

  try {
    const { id } = event.pathParameters;

    const result = await dynamodb
      .get({
        TableName: "TaskTable",
        Key: { id },
      })
      .promise();

    const task = result.Item;

    return {
      status: 200,
      body: task,
    };
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getTask,
};
