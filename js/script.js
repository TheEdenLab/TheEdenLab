function link(page, extra) {
    if (page === 0) {
        location.replace(`https://theedenlab.github.io/${location.href}${extra}`);
    } else if (page) {
        location.replace(`https://theedenlab.github.io/${page}${extra}`);
    } else {
        location.replace(`https://theedenlab.github.io${extra}`);
    };
};