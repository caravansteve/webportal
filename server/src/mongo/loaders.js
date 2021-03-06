import DataLoader from 'dataloader'

const createBatcherById =
  (collection) =>
    async (ids) => collection.find({ _id: { $in: ids } }).toArray()

const defaultOptions = {
  cacheKeyFn: (key) => key.toString()
}

export default (collections) => {
  const { Users, Centers } = collections

  return {
    Users: new DataLoader(createBatcherById(Users), defaultOptions),
    Centers: new DataLoader(createBatcherById(Centers), defaultOptions)
  }
}
