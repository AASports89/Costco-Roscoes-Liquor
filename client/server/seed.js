const db = require('./config/connection');
const { User, DriverLog } = require('./models');
const userSeeds = require('./userSeeds.json');
const driverLogs = require('./driverLogs.json');

db.once('open', async () => {
  
await User.deleteMany({});
await DriverLog.deleteMany({});
  
const users = await User.create(userSeeds);
const driverLog = await DriverLog.insertMany(driverLogs);

for (let i = 0; i < driverLogs.length; i++) {
    const { _id, username } = await DriverLog.create(driverLogs[i]);
    const user = await User.findOneAndUpdate(
      { username: username },
      {
          $addToSet:
          [
            {driverLog: _id},
          ],
        },
    );
  }

  console.log(users, driverLog);
  process.exit(0);
});