

```
aws s3 cp /index.html s3://cifras-simplificadas
aws s3 cp /cifras.json s3://cifras-simplificadas
```

```
aws s3api put-bucket-policy --bucket cifras-simplificadas --policy file://aws/politica.json
```