import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { PlatformLocation } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-legacy',
    templateUrl: './legacy.component.html',
    styleUrls: ['./legacy.component.scss']
})
export class LegacyComponent implements OnInit {

    public url: SafeResourceUrl;

    constructor(
        private platformLocation: PlatformLocation,
        private sanitizer: DomSanitizer,
        private route: ActivatedRoute,
        private router: Router,
    ) {}

    /**
     *
     */
    ngOnInit() : void {
        this.route.url.subscribe(urlSegments => {
            const host = this.getHost();
            const requestedUrl = host + '/legacy/#!/' + urlSegments.join('');
            this.url = this.sanitizer.bypassSecurityTrustResourceUrl(requestedUrl);
        });
    }

    /**
     * Listen to route changes in the iframe and force route change in this environment
     * @param iframe
     */
    load(iframe : HTMLIFrameElement) {
        iframe.contentWindow.addEventListener("popstate", (e : PopStateEvent) => {
            let url: string[] = iframe.contentWindow.location.href.split("#!/")[1].split('/');
            this.router.navigate(url);
        });
    }

    /**
     * Build the host name for any environment
     */
    private getHost(): string {
        const protocol: string = this.platformLocation.protocol;
        const domain: string = this.platformLocation.hostname;
        const port: string = this.platformLocation.port;
        const includePort: boolean = (protocol === "http:" && port !== "80") || (protocol === "https:" && port !== "443");

        return includePort ? `${protocol}//${domain}:${port}` : `${protocol}//${domain}` ;
    }
}
