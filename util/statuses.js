module.exports = {
    IDLE: () => {
        return {
            pid: process.pid,
            activity: {
                instance: false,
                timestamps: { start: new Date().getTime() },
                assets: {
                    large_image: 'kashima',
                    large_text: `Using v${require('../package').version} of Kashima`
                },
                state: 'Idling...'
            }
        };
    },
    PLAYING: (station, info) => {
        const figured = (station === 'qt'? 'qtradio.moe': `${info.artist} - ${info.title}`);

        return {
            pid: process.pid,
            activity: {
                instance: false,
                timestamps: { start: new Date().getTime(), end: new Date(info.end).getTime() },
                assets: {
                    large_image: 'kashima',
                    large_text: `Using v${require('../package').version} of Kashima`
                },
                state: 'Listening To:',
                details: figured
            }
        };
    }
};