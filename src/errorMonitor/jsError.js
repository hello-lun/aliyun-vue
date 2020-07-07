export function injectJsError() {
    console.log('event: ', 999999);

    window.addEventListener('error', function(event) {
        let log = {
            kind: '',
            type: 'error',
            errorType: 'jsError',
            url: '',
            message: ''
        }
        console.log('event: ', event);
        
    })
}