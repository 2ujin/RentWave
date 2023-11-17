database_init:
	docker compose up -d
	docker compose exec mongo mongo --eval "rs.initiate({_id: 'rs0', members: [{_id: 0, host: 'localhost:27017'}]});"
database_init_mac:
	docker compose up -d
	docker compose exec mongo mongo --eval "rs.initiate({_id: 'rs0', members: [{_id: 0, host: '$(ipconfig getifaddr en0):27017'}]});"