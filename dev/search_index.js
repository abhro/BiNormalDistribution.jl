var documenterSearchIndex = {"docs":
[{"location":"","page":"Home","title":"Home","text":"CurrentModule = BiNormalDistribution","category":"page"},{"location":"#BiNormalDistribution","page":"Home","title":"BiNormalDistribution","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Documentation for BiNormalDistribution.","category":"page"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"","page":"Home","title":"Home","text":"Modules = [BiNormalDistribution]","category":"page"},{"location":"#BiNormalDistribution.BiNormal","page":"Home","title":"BiNormalDistribution.BiNormal","text":"BiNormal{T<:Real,W<:Real} <: ContinuousUnivariateDistribution\nBiNormal(λ::W, μ₁::T, σ₁::T, μ₂::T, σ₂::T)\n\nLinear combination of two Gaussians.\n\n\n\n\n\n","category":"type"},{"location":"#BiNormalDistribution.cf-Tuple{BiNormal, Any}","page":"Home","title":"BiNormalDistribution.cf","text":"cf(d::BiNormal, t)\n\nCharacteristic function (φ_d) of a bi-normal distribution d. The mathematical definition is:\n\nφ_d(t) = λ expleft(itμ_1 - tfrac12 t^2 σ_1^2right)\n       + (1-λ) expleft(itμ_2 - tfrac12 t^2 σ_2^2right)\n\n\n\n\n\n","category":"method"},{"location":"#BiNormalDistribution.componentcdfs-Tuple{BiNormal, Real}","page":"Home","title":"BiNormalDistribution.componentcdfs","text":"componentcdfs(d::BiNormal, x::Real)\n\nReturn the (weighted) component pdfs of the BiNormal distribution, that is, λ F_N(x μ_1 σ_1) and (1-λ) F_N(x μ_2 σ_2), where F_N is the cdf of the normal distribution.\n\n\n\n\n\n","category":"method"},{"location":"#BiNormalDistribution.componentpdfs-Tuple{BiNormal, Real}","page":"Home","title":"BiNormalDistribution.componentpdfs","text":"componentpdfs(d::BiNormal, x::Real)\n\nReturn the (weighted) component pdfs of the BiNormal distribution, that is, λ N(x μ_1 σ_1) and (1-λ) N(x μ_2 σ_2), where N is the pdf of the normal distribution.\n\n\n\n\n\n","category":"method"},{"location":"#BiNormalDistribution.entropy-Tuple{BiNormal}","page":"Home","title":"BiNormalDistribution.entropy","text":"entropy(d::BiNormal)\n\nCalculate the entropy of a BiNormal distribution d, evaluated numerically.\n\n\n\n\n\n","category":"method"},{"location":"#BiNormalDistribution.histmaxes","page":"Home","title":"BiNormalDistribution.histmaxes","text":"histmaxes(x, n = nothing)\n\nFind the most prominent occurences in a data series. Calculated by making a kernel density estimate and then finding the peaks of the KDE when treated as a signal.\n\nReturns the interpolated KDE and the maxima of the KDE.\n\nSee also: maxes.\n\n\n\n\n\n","category":"function"},{"location":"#BiNormalDistribution.kurtosis-Tuple{BiNormal}","page":"Home","title":"BiNormalDistribution.kurtosis","text":"kurtosis(d::BiNormal)\n\nMathematical definition:\n\nfrac\n         λ  (μ_1^4 + 3 σ_1^4 + 6 μ_1^2 σ_1^2)\n    + (1-λ) (μ_2^4 + 3 σ_2^4 + 6 μ_2^2 σ_2^2)\n    + 3 μ^2 (μ^2 + 2 σ^2)\n    - 4 μ λ μ_1 (μ_1^2 + 3 σ_1^2) + (1-λ) μ_2 (μ_2^2 + 3 σ_2^2)\n\n    σ^4\n\n\nwhere μ is the mean of d and σ is the standard deviation of d\n\n\n\n\n\n","category":"method"},{"location":"#BiNormalDistribution.loglikelihood-Tuple{BiNormal, Any}","page":"Home","title":"BiNormalDistribution.loglikelihood","text":"loglikelihood(d::BiNormal, x)\n\nGet the total log-likelihood of a BiNormal distribution d producing samples x.\n\n\n\n\n\n","category":"method"},{"location":"#BiNormalDistribution.maxes","page":"Home","title":"BiNormalDistribution.maxes","text":"maxes(x, n = nothing)\n\nFind the n most prominent maxima of a signal/curve x.\n\n\n\n\n\n","category":"function"},{"location":"#BiNormalDistribution.mgf-Tuple{BiNormal, Any}","page":"Home","title":"BiNormalDistribution.mgf","text":"mgf(d::BiNormal, t)\n\nMoment generating function (M_d) of a bi-normal distribution d. The mathematical definition is:\n\nM_d(t) = λ expleft(t μ_1 + tfrac12 t^2 σ_1^2right)\n       + (1-λ) expleft(t μ_2 + tfrac12 t^2 σ_2^2right)\n\n\n\n\n\n","category":"method"},{"location":"#BiNormalDistribution.moments-Tuple{AbstractVector, Integer}","page":"Home","title":"BiNormalDistribution.moments","text":"moments(x::AbstractVector, n::Integer)\n\nGet the first n-moments of a given dataset. ( x^k , k = 1 dots n)\n\n\n\n\n\n","category":"method"},{"location":"#BiNormalDistribution.skewness-Tuple{BiNormal}","page":"Home","title":"BiNormalDistribution.skewness","text":"skewness(d::BiNormal)\n\nMathematical definition:\n\nγ = fracλ μ_1 (μ_1^2 + σ_1^2) + (1 - λ) μ_2 (μ_2^2 + σ_2^2) - μ (3 σ^2 + μ^2)σ^3\n\nwhere μ is the mean of d and σ is the standard deviation of d\n\n\n\n\n\n","category":"method"},{"location":"#BiNormalDistribution.∇loglikelihood-Tuple{BiNormal, Any}","page":"Home","title":"BiNormalDistribution.∇loglikelihood","text":"∇loglikelihood(d::BiNormal, x)\n\nGradient of the loglikelihood function with respect to the parameters of d.\n\n\n\n\n\n","category":"method"},{"location":"#Distributions.cdf-Tuple{BiNormal, Real}","page":"Home","title":"Distributions.cdf","text":"cdf(d::BiNormal, x::Real)\n\nThe cumulative density function (cdf) is\n\nF(x λ μ_1 σ_1 μ_2 σ_2) = λ F_N(x μ_1 σ_1) + (1-λ) F_N(x μ_2 σ_2)\n\nwhere F_N is the cdf of the normal distribution.\n\n\n\n\n\n","category":"method"},{"location":"#Distributions.pdf-Tuple{BiNormal, Real}","page":"Home","title":"Distributions.pdf","text":"pdf(d::BiNormal, x::Real)\n\nThe probability density function (pdf) is\n\nf(x λ μ_1 σ_1 μ_2 σ_2) = λ N(x μ_1 σ_1) + (1-λ) N(x μ_2 σ_2)\n\nwhere N is the pdf of the normal distribution.\n\n\n\n\n\n","category":"method"},{"location":"#Statistics.mean-Tuple{BiNormal}","page":"Home","title":"Statistics.mean","text":"mean(d::BiNormal)\n\nMean of the bi-normal distribution is μ = λ μ_1 + (1 - λ) μ_2\n\n\n\n\n\n","category":"method"},{"location":"#Statistics.median-Tuple{BiNormal}","page":"Home","title":"Statistics.median","text":"median(d::BiNormal)\n\nFind the median of a BiNormal distribution d. Note that this doesn't have an analytical solution, so a root-finding algorithm from Roots.jl is employed.\n\n\n\n\n\n","category":"method"},{"location":"#Statistics.quantile-Tuple{BiNormal, Real}","page":"Home","title":"Statistics.quantile","text":"quantile(d::BiNormal, q::Real)\n\nUse Newton's method to find the quantile for BiNormal distribution d.\n\n\n\n\n\n","category":"method"},{"location":"#Statistics.var-Tuple{BiNormal}","page":"Home","title":"Statistics.var","text":"var(d::BiNormal)\n\nVariance of the bi-normal distribution is\n\nbeginalign*\nσ^2 = λσ_1^2 + (1-λ)σ_2^2 + λ(1-λ) (μ_1 - μ_2)^2 \n= λ (σ_1^2 + μ_1^2) + (1 - λ) (σ_2^2 + μ_2^2) - μ^2\nendalign*\n\n\n\n\n\n","category":"method"},{"location":"#StatsAPI.params-Tuple{BiNormal}","page":"Home","title":"StatsAPI.params","text":"params(d::BiNormal)\n\nReturn the parameters of a BiNormal distribution: (λ μ_1 σ_1 μ_2 σ_2).\n\n\n\n\n\n","category":"method"}]
}
