<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" 
                xmlns:html="http://www.w3.org/TR/REC-html40"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
	<xsl:template match="/">
		<html xmlns="http://www.w3.org/1999/xhtml">
			<head>
				<title>XML Sitemap - INSD Project</title>
				<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
				<style type="text/css">
					body {
						font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
						font-size: 14px;
						color: #333;
						margin: 0;
						padding: 40px;
						background-color: #f7f7f7;
					}
					h1 { color: #111; font-weight: 900; text-transform: uppercase; letter-spacing: -1px; }
					#intro { margin: 20px 0; line-height: 1.5; color: #666; }
					table { width: 100%; border-collapse: collapse; background: #fff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.05); }
					th { background-color: #111; color: #fff; text-align: left; padding: 15px 20px; font-weight: 600; text-transform: uppercase; font-size: 12px; letter-spacing: 1px; }
					td { padding: 12px 20px; border-bottom: 1px solid #eee; }
					tr:last-child td { border-bottom: 0; }
					tr:hover td { background-color: #fcfcfc; }
					a { color: #d4af37; text-decoration: none; font-weight: 600; }
					a:hover { text-decoration: underline; }
					.count { color: #999; font-weight: normal; margin-left: 10px; }
				</style>
			</head>
			<body>
				<h1>XML Sitemap</h1>
				<div id="intro">
					<p>
						This is an XML Sitemap, meant for consumption by search engines like Google or Bing.<br/>
						You can find more information about XML sitemaps on <a href="http://sitemaps.org">sitemaps.org</a>.
					</p>
					<p>
						Total number of URLs in this sitemap: 
						<span class="count">
							<xsl:value-of select="count(sitemap:urlset/sitemap:url)"/>
						</span>
					</p>
				</div>
				<table cellpadding="3">
					<thead>
						<tr>
							<th width="70%">URL</th>
							<th width="15%">Priority</th>
							<th width="15%">Last Modified (GMT)</th>
						</tr>
					</thead>
					<tbody>
						<xsl:variable name="lower" select="'abcdefghijklmnopqrstuvwxyz'"/>
						<xsl:variable name="upper" select="'ABCDEFGHIJKLMNOPQRSTUVWXYZ'"/>
						<xsl:for-each select="sitemap:urlset/sitemap:url">
							<tr>
								<td>
									<xsl:variable name="itemURL">
										<xsl:value-of select="sitemap:loc"/>
									</xsl:variable>
									<a href="{$itemURL}">
										<xsl:value-of select="sitemap:loc"/>
									</a>
								</td>
								<td>
									<xsl:value-of select="concat(sitemap:priority*100,'%')"/>
								</td>
								<td>
									<xsl:value-of select="concat(substring(sitemap:lastmod,0,11),concat(' ', substring(sitemap:lastmod,12,5)))"/>
								</td>
							</tr>
						</xsl:for-each>
					</tbody>
				</table>
			</body>
		</html>
	</xsl:template>
</xsl:stylesheet>
