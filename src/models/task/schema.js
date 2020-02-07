import { moment } from 'heliosrx'

export default {
  create({ title }) {
    return {
      title:     title || "Undefined title",
      createdAt: moment.currentTimeServer('REALTIMEDB'),
      isDone:    false,
    };
  },
  fields: {
    title:     { type: 'String', required: true },
    createdAt: { type: 'ServerTimestamp' },
    isDone:    { type: 'Boolean' },
  },
};
