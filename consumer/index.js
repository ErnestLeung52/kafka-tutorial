console.log('consumer...');

import Kafka from 'node-rdkafka';
import eventType from '../eventType.js';

const consumer = Kafka.KafkaConsumer(
  {
    'group.id': 'kafka',
    'metadata.broker.list': 'localhost:9092',
  },
  {}
);

// connect consumer to broker
consumer.connect();

consumer
  .on('ready', () => {
    console.log('consumer ready...');
    // consume to the topic
    consumer.subscribe(['test']);
    //consume events from topic as stream flows in
    consumer.consume();
  })
  .on('data', (data) => {
    console.log(`received message: ${eventType.fromBuffer(data.value)}`);
  });
