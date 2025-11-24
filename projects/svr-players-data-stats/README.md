# SVR Clover Stats Analyst

Overview
- This project contains a player- and tournament-level analysis performed for SVR. It focuses on individual and team metrics derived from match recordings: Damage, Kills, Survival, MovementTime (minutes), ReactionTime (seconds), DecisionTime (seconds), HealRestored, and a derived indicator `WillImprove`.

Data collection
- I reviewed match recordings and used a timer to capture moments of active engagement (movement, shooting) and decision-making. MovementTime captures active playtime per match; ReactionTime and DecisionTime capture response and deliberation durations in seconds.

Visualizations
- Raw per-match tables
- Correlation heatmap of aggregated features
- An interpretation table mapping feature correlations to coaching takeaways
- Per-player aggregates and comparative bar charts

Key takeaways
- Average_Kill and Average_Damage strongly correlate with the `WillImprove` indicator — offensive output is a primary improvement signal.
- MovementTime displayed a weak negative correlation with improvement — consider structured drills that focus on effective movement rather than constant roaming.
- ReactionTime correlates negatively with improvement — reaction and aiming drills can help players with slower responses.
