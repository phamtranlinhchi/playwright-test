// NOTE: Name of the key must be the same as the name of the test file

export default {
    bng: {
        testUrl: 'https://10.98.100.180/bngblaster',
        testTitle: '[BNGBLASTER] Login Page should return 200 and login successfully',
        testUsername: 'admin',
        testPassword: 'admin@123',
    },
    streamlit: {
        testUrl: 'https://10.98.100.180/streamlit/',
        testTitle: '[STREAMLIT] Page should return 200 and should not contain "value error"'
    },
    rundeck_nmaa: {
        testUrl: 'https://10.98.100.180/rundeck',
        testTitle: '[RUNDECK-NMAA] Login Page should return 200 and login successfully',
        testUsername: 'thrukadmin',
        testPassword: 'thrukadmin',
    },
    kibana: {
        testUrl: 'https://10.98.100.186/kibana/login?next=%2Fkibana%2F',
        testTitle: '[KIBANA] Login Page should return 200 and login successfully',
        testUsername: 'elastic',
        testPassword: 'juniper@123',
    },
    grafana_pnetlab: {
        testUrl: 'http://10.98.100.188/grafana/login',
        testTitle: '[GRAFANA-PNETLAB] Login Page should return 200 and login successfully',
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
    },
    rundeck_syslog: {
        testUrl: 'https://10.98.100.186/elk_rundeck',
        testTitle: '[RUNDECK-SYSLOG] Login Page should return 200 and login successfully',
        testUsername: 'thrukadmin',
        testPassword: 'thrukadmin',
    },
    prometheus: {
        testUrl: 'http://10.98.100.188/prometheus/graph',
        testTitle: '[PROMETHEUS] Page should return 200'
    },
    grafana_nmaa: {
        testUrl: 'http://10.98.100.180/grafana/login',
        testTitle: '[GRAFANA-NMAA] Login Page should return 200 and login successfully',
        testUsername: 'thrukadmin',
        testPassword: 'thrukadmin',
    },
    icingaweb: {
        testUrl: 'https://10.98.100.180/icingaweb/authentication/login?redirect=dashboard',
        testTitle: '[ICINGAWEB] Login Page should return 200 and login successfully',
        testUsername: 'icingaweb',
        testPassword: 'juniper@123',
    },
    syslog_analysis: {
        testUrl: 'http://10.98.100.108/app_panel',
        testTitle: '[SYSLOG-ANALYSIS] Page should return 200'
    },
    docxtemplate: {
        testUrl: 'https://10.98.100.180/docxtemplate/',
        testTitle: '[DOCXTEMPLATE] Page should return 200'
    },
    airflow: {
        testUrl: 'https://10.98.100.180/airflow/login/',
        testTitle: '[AIRFLOW] Page should return 200',
    },
}
