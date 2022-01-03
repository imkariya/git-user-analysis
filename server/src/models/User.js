import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema(
    {
        name: {
            type: String,
        },
        image: {
            type: String,
            default: null,
        },
        follower: {
            type: Number,
            default: null,
        },
        following: {
            type: Number,
            default: null,
        },
        repo_count: {
            type: Number,
            default: null,
        },
        member_since: {
            type: Date,
        },
        profile_url: String,
    },
    {
        timestamps: true,
    }
);

export default mongoose.model('user', userSchema);
