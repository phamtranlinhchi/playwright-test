// NOTE: Name of the key must be the same as the name of the test file

export default {
    streamlit: {
        testUrl: 'https://10.98.100.180/streamlit/',
        testTitle: '[STREAMLIT] Page should return 200 and should not contain "value error"'
    },
    rundeck: {
        testUrl: 'https://10.98.100.180/rundeck',
        testTitle: '[RUNDECK] Login Page should return 200 and login successfully',
        testUsername: 'thrukadmin',
        testPassword: 'thrukadmin',
    },
    kibana: {
        testUrl: 'https://10.98.100.186/kibana/login?next=%2Fkibana%2F',
        testTitle: '[KIBANA] Login Page should return 200 and login successfully',
        testUsername: 'elastic',
        testPassword: 'juniper@123',
    },
    grafana: {
        testUrl: 'http://10.98.100.188/grafana/login',
        testTitle: '[GRAFANA] Login Page should return 200 and login successfully',
        testUsername: 'thrukadmin',
        testPassword: 'thrukadmin',
    },
    radius: {
        testUrl: 'http://10.98.100.182:8000/login.php',
        testTitle: '[RADIUS] Login Page should return 200 and login successfully',
        testUsername: 'administrator',
        testPassword: 'radius',
    },
    tacacs: {
        testUrl: 'https://10.98.100.120:4443/auth/login',
        testTitle: '[TACACS] Login Page should return 200 and login successfully and status should be active',
        testUsername: 'tacgui',
        testPassword: 'juniper@123',
    }
}