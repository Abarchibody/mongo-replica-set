#!/bin/bash
echo *******************************************
echo Starting the replica set
echo *******************************************

sleep 10 | echo Sleeping

mongo mongodb://192.160.0.3:27001 replicaSet.js