import mongoose from 'mongoose';

import serverConfig from './serverConfig';

const { ATLAS_DB_URL, NODE_ENV } = serverConfig;

async function connectToDb() {
    try {
        if(NODE_ENV == 'developement') {
            await mongoose.connect(ATLAS_DB_URL);
            console.log('db is successfully connected');
        }
    } catch (error) {
        console.log('Server could not connect to database');
        throw error;
    }
}

export default connectToDb;