# Data Science 2025 - Assignment Completion Dashboard

A beautiful, interactive dashboard showing student assignment completion statistics.

## 🌟 Features

- 📊 Real-time completion statistics
- 📈 Interactive charts and visualizations
- 👥 Individual student performance tracking
- 📋 Assignment completion patterns
- 🎯 Key insights and recommendations
- 📱 Responsive design for all devices

## 🚀 Deployment

### Quick Deploy
```bash
# Update data and deploy
./deploy.sh
```

### Manual Deploy
```bash
# Update dashboard data
python3 ../update_dashboard.py

# Deploy to Vercel
cd dashboard
vercel --prod
```

## 📊 Data Sources

The dashboard reads data from:
- `completion_analysis.json` - Detailed completion data
- `completion_analysis.csv` - Spreadsheet format
- `metadata.json` - Dashboard metadata

## 🔧 Development

### Local Testing
```bash
# Start local server
python3 -m http.server 8000

# Open in browser
# http://localhost:8000/dashboard/
```

### Updating Data
```bash
# Run completion analysis
python3 analyze_completion.py

# Update dashboard
python3 update_dashboard.py
```

## 📈 Automatic Updates

The dashboard automatically refreshes every 5 minutes when live. For manual updates:

1. Run assignment analysis: `python3 analyze_completion.py`
2. Update dashboard: `python3 update_dashboard.py`
3. Deploy: `./dashboard/deploy.sh`

## 🎨 Customization

### Colors
Edit `styles.css` to customize the color scheme.

### Charts
Modify `script.js` to add new chart types or change existing ones.

### Data
Update `analyze_completion.py` to include additional metrics.

## 📞 Support

For issues or feature requests, please check the main project repository.

---
*Built with ❤️ for Data Science 2025*
