#!/bin/bash

echo "🚀 Uploading all optimized files to young.qirimtatarca.org..."

BASE_URL="https://qirimtatarca:LEt%40%299%7Dg%5E2%2Fhg%3BGB@webdisk.qirimtatarca.org:2078/public_html/young"
SUCCESS_COUNT=0
TOTAL_COUNT=0

# Function to upload file
upload_file() {
    local file=$1
    local remote_path=${file#dist/}
    local full_url="$BASE_URL/$remote_path"
    
    echo "📤 Uploading: $remote_path"
    
    # Create directory if needed
    local dir=$(dirname "$remote_path")
    if [ "$dir" != "." ]; then
        curl -X MKCOL "$BASE_URL/$dir/" -s -o /dev/null 2>/dev/null
    fi
    
    # Upload file
    if curl -T "$file" "$full_url" -s -o /dev/null --write-out "%{http_code}" | grep -q "20[01]"; then
        echo "✅ Success: $remote_path"
        ((SUCCESS_COUNT++))
    else
        echo "❌ Failed: $remote_path"
    fi
    ((TOTAL_COUNT++))
}

# Upload all files
while IFS= read -r -d '' file; do
    upload_file "$file"
done < <(find dist -type f -print0)

echo ""
echo "📊 Upload Summary:"
echo "   ✅ Successful: $SUCCESS_COUNT"
echo "   ❌ Failed: $((TOTAL_COUNT - SUCCESS_COUNT))"
echo "   📁 Total: $TOTAL_COUNT"
echo ""
echo "🎉 Deployment to young.qirimtatarca.org completed!"