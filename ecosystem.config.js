module.exports = {
    apps: [{
        name: 'solanize-landing',
        script: './node_modules/next/dist/bin/next',
        args: 'start',
        instances: 1,
        exec_mode: 'fork',
        env: {
            NODE_ENV: 'production',
            PORT: 4003
        },
        error_file: './logs/solanize-landing-error.log',
        out_file: './logs/solanize-landing-out.log',
        log_file: './logs/solanize-landing-combined.log',
        time: true,
        max_memory_restart: '500M'
    }]
};
