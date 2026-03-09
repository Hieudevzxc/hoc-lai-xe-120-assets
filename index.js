console.log('Project Utils Server gracefully started');

process.on('SIGINT', () => {
    console.log('Shutting down...');
    process.exit();
});
