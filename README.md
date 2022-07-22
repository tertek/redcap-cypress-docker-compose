# redcap-cypress-docker-compose

1. Download redcap source files and set www/redcap as their root directory

2. Edit database.php: 

```php
$hostname   = 'database';
$db         = 'redcap';
$username   = 'root';
password    = 'root';
```

3. Install necessary sql



To Do:

- Include Source Code fetch script by version, release and package typ
- Automate Database seeding (by fetching install.sql from REDCap Source Code)
- use CentOS since it is most similar to Redhat which we use
- (high level) extend configuration to choose EMS to be installed and automatically fetch relevant tests from repo if available
- (high level) choose OS, PHP version

Sources:
- https://github.com/sprintcube/docker-compose-lamp
- https://github.com/cypress-io/cypress-example-docker-compose
- https://github.com/mtlynch/hello-world-cypress


Testing Scripts:
- https://github.com/aldefouw/redcap_cypress
- https://github.com/tertek/redcap-dev-spec
